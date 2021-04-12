using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Movie.Data;
using System;
using Movie.Domain.DTOs;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.RegularExpressions;
using CsvHelper.Configuration;
using CsvHelper.Configuration.Attributes;
using CsvHelper;
using Movie.Domain.Entity;
using System.Globalization;
using System.IO;
using System.Net.Http;
using Movie.Domain.Providers;

namespace Movie.API.Controllers
{

    [Route("[controller]")]
    [ApiController]
    public class SheetController : ControllerBase
    {
        
        private readonly ILogger<SheetController> _logger;
        private readonly ISheetProvider _sheet;

        public SheetController(ILogger<SheetController> logger, ISheetProvider sheet)
        {
            _logger = logger;
            _sheet = sheet;
        }

        [HttpPost]
        public async Task<ActionResult<IList<Timesheet>>> Post([FromBody] SheetRequest sheet)
        {
            try
            {
                var result = await _sheet.ParseFromCSV(sheet.Content);
                return Ok(result);
            }
            catch (Exception ex)
            {

                return NotFound(ex);
            }

            
        }
        [HttpGet]
        public ActionResult<List<string>> Get()
        {
            _logger.LogInformation("Getting all genres");
            List<string> al = new List<string>();
            al.Add("algo");
            return al;
        }


    }
    


}
