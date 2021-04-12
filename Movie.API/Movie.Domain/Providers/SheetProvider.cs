using CsvHelper;
using CsvHelper.Configuration;
using Movie.Domain.Entity;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace Movie.Domain.Providers
{
    public interface ISheetProvider
    {
        Task<IList<Timesheet>> ParseFromCSV(string fileBase64);
    }
    public class SheetProvider : ISheetProvider
    {
        public async Task<IList<Timesheet>> ParseFromCSV(string fileBase64)
        {
            var result = fileBase64.Substring(fileBase64.IndexOf(",") + 1);
            var decodedResult = Convert.FromBase64String(result);
            var fileContent = new StreamContent(new MemoryStream(decodedResult));

            using var reader = new StreamReader(fileContent.ReadAsStream());
            using var csvReader = new CsvReader(reader, CultureInfo.InvariantCulture);


            csvReader.Context.RegisterClassMap<TimesheetRecordMap>();

            var records = csvReader.GetRecords<TimesheetCsvRecord>().ToList();
            return records.Select(row=> 
            {
                return new Timesheet
                {
                    Project = new Project 
                    {
                        ProjectName = row.ProjectName
                    },
                    User = new User
                    {
                        Username = row.Developer
                    },
                    TimesheetRecords = row.Description.Split(";").Select(task => 
                    {
                        return new TimesheetRecord
                        {
                            Description = task,
                            DateCreated = DateTime.Parse(row.Date)
                        };
                    }).ToList()
                };
            }).ToList();
            
        }
        
    }
    public sealed class TimesheetRecordMap : ClassMap<TimesheetCsvRecord>
    {
        public TimesheetRecordMap()
        {
            Map(m => m.Date).Name("DATE");
            Map(m => m.Month).Name("MONTH");
            Map(m => m.Year).Name("YEAR");
            Map(m => m.ProjectName).Name("PROJECT NAME");
            Map(m => m.Description).Name("DESCRIPTION");
            Map(m => m.Hours).Name("HOURS");
            Map(m => m.Developer).Name("DEVELOPER");

        }
    }
    public class TimesheetCsvRecord
    {
        public string Date { get; set; }
        public string Month { get; set; }
        public int Year { get; set; }
        public string ProjectName { get; set; }
        public string Description { get; set; }
        public float  Hours { get; set; }
        public string Developer { get; set; }

    }
}
