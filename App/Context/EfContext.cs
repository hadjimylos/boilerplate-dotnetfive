using Microsoft.EntityFrameworkCore;

namespace App {
    public class EfContext : DbContext {
        // public DbSet<ModelName> ModelNames { get; set; }

        protected override void OnModelCreating(ModelBuilder builder) {
            // add any fluent UI dedfaults and configs otherwise not decorated
            base.OnModelCreating(builder);
        }

        public override int SaveChanges() {
            // override default save behavior for all and any models
            return base.SaveChanges();
        }
    }
}
