using Core.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BusinessLogic.Data.Config
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.Property(p => p.Name).IsRequired().HasMaxLength(250);
            builder.Property(p => p.Description).IsRequired().HasMaxLength(500);
            builder.Property(p => p.Image).IsRequired().HasMaxLength(1000);

            builder.Property(p => p.price).HasColumnType("decimal(18,2)");
            builder.HasOne(m => m.Brand).WithMany().HasForeignKey(p => p.BrandId);
            builder.HasOne(c => c.Category).WithMany().HasForeignKey(p => p.CategoryId);
        }
    }
}
