/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    const schools = [
      // List all your school names here
      "mario-sperry-miami",
      "alliance-alphaville",
      "alliance-campo-belo",
      // ...
    ];

    return schools.map((school) => ({
      source: `/${school}`,
      destination: `/template/${school}`,
    }));
  },
};
