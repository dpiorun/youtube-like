import puppeteer from 'puppeteer';
import { server } from '../setupTests';

describe('Test e2e', () => {
  let browser: puppeteer.Browser;
  let page: puppeteer.Page;

  beforeAll(() => {
    server.close();
  });

  beforeEach(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.waitForNetworkIdle();
  });

  afterEach(async () => {
    await browser.close();
  });

  it('performs search', async () => {
    await page.type('[placeholder="Search"]', 'skating dog');
    await page.click('[aria-label="search-button"]');
    await page.waitForNetworkIdle();

    // There should be 5 thumbnails with sources to videos
    const relatedHandle = await page.$('#related');
    const thumbnails = await relatedHandle?.$$eval('img', (thumbnails) =>
      thumbnails.map((node) => node.src)
    );

    expect(thumbnails).toBeDefined();
    expect(thumbnails!.length).toBe(5);
    for (const src of thumbnails!) {
      expect(src).not.toEqual('');
    }
  });

  it('shows embeded video', async () => {
    page.click('img[alt="thumbnail"]');
    await page.waitForNetworkIdle();

    const embededHandle = await page.$('[data-testid="iframe-container"]');
    const iframeSrc = await embededHandle?.$eval(
      'iframe',
      (element) => element.src
    );

    expect(iframeSrc).toBeDefined();
    expect(typeof iframeSrc).toBe('string');
    expect(iframeSrc).not.toEqual('');
  });

  it.todo('search input on mobile devices works properly');
});
