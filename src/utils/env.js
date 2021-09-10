import { Platform } from "react-native";

const liveHost = "https://europe-west1-mealstogo-9d2fb.cloudfunctions.net";
const localHost = "http://localhost:5001/mealstogo-b2612/us-central1";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;

// export const host = !isDevelopment || isAndroid ? liveHost : localHost;
export const host = liveHost;