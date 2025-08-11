using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Portfolio.Pages
{
    public class AboutModel : PageModel
    {

        public List<string> Skills { get; } = new();
        public record Fact(string Label, string Value);
        public List<Fact> Facts { get; } = new();

        public void OnGet()
        {
            Skills.AddRange(new[]
            {
                "ASP.NET Core, EF Core",
                "Razor Pages, Bootstrap",
                "SQL Server, basic Azure",
                "JavaScript, React"
            });

            Facts.AddRange(new[]
            {
                new Fact("Location", "Sweden"),
                new Fact("Open to", "Internships & junior roles"),
                new Fact("Currently learning", "Microsoft Graph, testing")
            });
        }
    }
}
