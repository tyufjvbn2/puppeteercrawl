import puppeteer from "puppeteer";
import cheerio from "cheerio";
import sanitizeHtml from "sanitize-html";
import { testElement } from "domutils";

const run = async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.setViewport({
		width: 1920,
		height: 1080,
	});
	await page.goto("https://www.koreabaseball.com/Schedule/ScoreBoard.aspx", {
		waitUntil: "networkidle0",
	});

	// await page.waitForSelector(".date-selector > .date > .today");

	let content = await page.content();

	// const $ = cheerio.load(content, { decodeEntities: true });

	// const res = await sanitizeHtml("body", {
	// 	parser: { decodeEntities: true },
	// });
	console.log("This is data", content);

	/* */
	// await page.screenshot({ path: "test.png" });
	/**/

	await browser.close();
	console.log("end");
	console.log("our time is running out : ", new Date());
};

console.log("start");
run();
