import { OBSWebSocket } from "obs-websocket-js";
import ora from "ora"; // Import ora
import chalk from "chalk"; // Import chalk

const obs = new OBSWebSocket();

const OBS_HOST = process.env.OBS_HOST;
const OBS_PORT = process.env.OBS_PORT;
const OBS_PASSWORD = process.env.OBS_PASSWORD;

/**
 * Function to connect to OBS WebSocket.
 */
async function connectOBS() {
  const spinner = ora("Connecting to OBS...").start(); // Start the spinner

  try {
    await obs.connect(`ws://${OBS_HOST}:${OBS_PORT}`, OBS_PASSWORD);
    spinner.succeed(chalk.green("✅ Successfully connected to OBS!")); // Success message
  } catch (error) {
    spinner.fail(chalk.red("❌ Error connecting to OBS:"));
    console.error(chalk.red(error)); // Display the error
  }
}

/**
 * Function to update the text in OBS.
 */
async function updateOBS(songInfo) {
  const spinner = ora("Updating song information...").start(); // Start the spinner

  try {
    await obs.call("SetInputSettings", {
      inputName: process.env.NAME_GUI_TEXT_OBS, // Name of the text source in OBS
      inputSettings: {
        text: songInfo,
      },
    });
    spinner.succeed(`🎶 Updated song information: ${chalk.bold(songInfo)}`); // Success message
  } catch (error) {
    spinner.fail(chalk.red("❌ Error updating OBS:"));
    console.error(chalk.red(error)); // Display the error
  }
}

export { connectOBS, updateOBS };
