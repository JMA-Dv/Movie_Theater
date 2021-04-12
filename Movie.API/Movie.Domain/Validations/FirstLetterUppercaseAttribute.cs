using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Domain.Validations
{
    public class FirstLetterUppercaseAttribute: ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {

            if (value == null || string.IsNullOrWhiteSpace(value.ToString()))
            {
                return ValidationResult.Success;
            }
            var firsLetter = value.ToString()[0].ToString();
            if (firsLetter != firsLetter.ToUpper())
            {
                return new ValidationResult("First letter must be uppercase");
            }

            return ValidationResult.Success;
        }
    }
}
