import "dotenv/config";
import chalk from "chalk"; // Import chalk
import ora from "ora"; // Import ora
import { openWindows } from "get-windows";
import { connectOBS, updateOBS } from "./obs_connection.js";

(async function main() {
  try {
    await connectOBS();

    const spinner = ora("Checking for Spotify...").start(); // Start the spinner

    setInterval(async () => {
      try {
        spinner.start(); // Start the spinner

        let data = await openWindows();

        const spotifyWindow = data.find((w) => w.owner.name === "Spotify");

        if (spotifyWindow) {
          spinner.succeed(`🎶 Now Playing: ${chalk.bold(spotifyWindow.title)}`);
          updateOBS(spotifyWindow.title);
        } else {
          spinner.warn("🔍 Spotify window not found. Retrying...");
        }
      } catch (err) {
        spinner.fail("❌ Error fetching windows or updating OBS.");
        console.error(chalk.red(err));
      } finally {
        spinner.stop(); // Stop the spinner at the end of the cycle
      }
    }, process.env.TIME);
  } catch (err) {
    console.error(chalk.red("❌ Error connecting to OBS:"), err);
  }
})();
