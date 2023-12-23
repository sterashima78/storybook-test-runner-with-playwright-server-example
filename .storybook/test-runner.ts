import { toMatchImageSnapshot } from 'jest-image-snapshot';

// test-runner 実行時には expect がグローバルに存在する
declare const expect: {
  (q: unknown): {
    toMatchImageSnapshot: (
      q: Parameters<typeof toMatchImageSnapshot>[1],
    ) => void;
  };
  extend: (unknown) => void;
};

export default {
  setup() {
    expect.extend({ toMatchImageSnapshot });
  },
  // デフォルト prepare をオーバーライドする
  // https://github.com/storybookjs/test-runner#prepare
  async prepare({ page, browserContext, testRunnerConfig }) {
    // コンテナから host へ 
    const targetURL = 'http://host.docker.internal:6006';
    const iframeURL = new URL('iframe.html', targetURL).toString();

    if (testRunnerConfig?.getHttpHeaders) {
      const headers = await testRunnerConfig.getHttpHeaders(iframeURL);
      await browserContext.setExtraHTTPHeaders(headers);
    }

    await page.goto(iframeURL, { waitUntil: 'load' }).catch((err) => {
      if (err.message?.includes('ERR_CONNECTION_REFUSED')) {
        const errorMessage = `Could not access the Storybook instance at ${targetURL}. Are you sure it's running?\n\n${err.message}`;
        throw new Error(errorMessage);
      }

      throw err;
    });
  },
  async postVisit(page, context) {
    await page.waitForLoadState('domcontentloaded');
    await page.waitForLoadState('load');
    await page.waitForLoadState('networkidle');
    await page.evaluate(() => document.fonts.ready);
    const image = await page.screenshot({
      animations: 'disabled',
      fullPage: true,
    });
    expect(image).toMatchImageSnapshot({
      customSnapshotsDir: '.storybook-images',
      customSnapshotIdentifier: context.id,
    });
  },
};