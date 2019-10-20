module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: '5433',
  username: 'postgres',
  password: 'docker',
  database: 'managerdb',
  define: {
    timestamps: true,
    underscored: true, // padrao under_score
    underscoredAll: true,
  },
};
