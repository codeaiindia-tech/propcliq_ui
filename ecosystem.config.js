module.exports = {
  apps: [
    {
      name: "next-app",
      script: "npm",
      args: "start",
      cwd: "/var/www/propcliq-ui/propcliq-ui",
      watch: true,
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
