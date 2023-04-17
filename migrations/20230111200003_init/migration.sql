-- AlterTable
ALTER TABLE "AdminUser" ADD COLUMN     "roles" JSONB NOT NULL DEFAULT '[]';
