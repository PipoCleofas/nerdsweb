using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Update;

namespace api.Data{


    public class ApplicationDBContext : DbContext{

        protected readonly IConfiguration Configuration;


        public ApplicationDBContext(IConfiguration configuration)
        {   
            Configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")); 
            // add connection string in appsettings.json (postgreSQL)
        }

        // keep our message
        public DbSet<Input> Inputs {get; set;}       

        
    } 
}