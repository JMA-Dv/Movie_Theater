using Movie.Domain.Validations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Domain.Entity
{
    public class Genre
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "The field with me {0} is required")]
        [StringLength(30)]
        [FirstLetterUppercase]
        public string Name { get; set; }
    }
}
