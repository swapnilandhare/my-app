import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "my-app",
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
