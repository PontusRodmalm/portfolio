using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;

namespace Portfolio.Pages
{
    public class ContactModel : PageModel
    {
        [BindProperty]
        public ContactForm Form { get; set; } = new();

        public bool Sent { get; set; }

        public void OnGet() { }

        public void OnPost()
        {
            if (!ModelState.IsValid)
            {
                // Visa samma sida med valideringsfel
                return;
            }

            // Vi simulerar "skickat" 
            Sent = true;

            ModelState.Clear();
            Form = new();
        }

        public class ContactForm
        {
            [Required, StringLength(80)]
            public string Name { get; set; } = string.Empty;

            [Required, EmailAddress]
            public string Email { get; set; } = string.Empty;

            [Required, StringLength(2000)]
            public string Message { get; set; } = string.Empty;
        }
    }
}
