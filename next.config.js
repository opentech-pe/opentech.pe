/** @type {import('next').NextConfig} */

const nextConfig = {
  // Configuración del webpack
  webpack: (config, { dev, isServer }) => {
    // Optimizaciones para desarrollo
    if (dev && !isServer) {
      // Forzar evaluación completa
      config.cache = false;

      // Configurar Fast Refresh
      config.optimization.minimize = false;

      // Agregar reglas específicas para archivos
      config.watchOptions = {
        ignored: ["**/node_modules", "**/.next"],
        aggregateTimeout: 300,
        poll: 1000,
      };
    }

    return config;
  },

  // Configuración del servidor de desarrollo
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },

  // Configuración de recarga
  onDemandEntries: {
    // Período antes de que una página se elimine del buffer
    maxInactiveAge: 25 * 1000,
    // Número de páginas que mantener en buffer
    pagesBufferLength: 5,
  },
};

module.exports = nextConfig;
