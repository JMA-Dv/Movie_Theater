using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

using Movie.API;
using Movie.Data;
using Movie.Domain.DTOs;
using Movie.Domain.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Movie.API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class GenreController : ControllerBase
    {
        private readonly ILogger<GenreController> _logger;
        private readonly MovieDbContext _context;
        private readonly IMapper _mapper;

        public GenreController(ILogger<GenreController> logger, MovieDbContext context, IMapper mapper)
        {
            _logger = logger;
            _context = context;
            _mapper = mapper;
        }
        [HttpGet]
        public async Task<List<GenreDTO>> Get()
        {
            _logger.LogInformation("Getting all genres");
            var genres = await _context.Genres.ToListAsync();

            return _mapper.Map<List<GenreDTO>>(genres);
        }

        
        [HttpGet("{id}")]
        public ActionResult<Genre> Get(int id)
        {
            throw new NotImplementedException();
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] GenreCreationDTO genreDTO)
        {
            var genre = _mapper.Map<Genre>(genreDTO);

            _context.Add(genre);
            await _context.SaveChangesAsync();
            return NoContent();
         
        }
        [HttpPut]
        public ActionResult Put([FromBody] Genre genre)
        {
            throw new NotImplementedException();
        }

        [HttpDelete]
        public ActionResult Delete()
        {
            throw new NotImplementedException();
        }

    }
}
