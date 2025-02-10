import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const postgresVersion = await database.query("SHOW server_version");

  response.status(200).json({
    updated_at: updatedAt,
    postgresVersion: postgresVersion.rows,
  });
}

export default status;
