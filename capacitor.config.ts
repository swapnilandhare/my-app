import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.tribetayling.tridentmumbai400001customer",
  appName: "Trident",
  webDir: "out",
  plugins: {
    android: {
      minVersion: "11",
      minGradleVersion: "7.4.2",
    },
  },
  server: {
    androidScheme: "https",
  },
};

export default config;
