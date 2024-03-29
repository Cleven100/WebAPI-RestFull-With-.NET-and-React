﻿using Microsoft.EntityFrameworkCore.Migrations;

namespace BusinessLogic.Identity.Migrations
{
    public partial class SecurityImage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                 name: "Image",
                 table: "AspNetUsers",
                 type: "nvarchar(max)",
                 nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "AspNetUsers");

        }
    }
}
