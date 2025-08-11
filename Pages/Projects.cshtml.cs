using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;

namespace Portfolio.Pages
{
    public class ProjectsModel : PageModel
    {
        public record Project(string Title, string Description, string SourceUrl, string? ImageUrl = null);
        public List<Project> Items { get; } = new();
        public void OnGet()
        {
            Items.Add(new Project(
                Title: "Amped Up!",
                Description: "A music groups app with search, pagination, and details. Built with React and Bootstrap.",
                SourceUrl: "https://github.com/PontusRodmalm/my-react-app.git",
                ImageUrl: null
            ));
        }
    }
}
