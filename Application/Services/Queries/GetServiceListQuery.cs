using Application.Common.Interfaces;
using Domain.DTOs;
using Domain.Entities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Services.Queries
{
    public class GetServiceListQuery : IRequest<List<ServiceDTO>>
    {
    }

    public class GetServiceListQueryHandler : IRequestHandler<GetServiceListQuery, List<ServiceDTO>>
    {

        private readonly IElevatDbContext _context;

        public GetServiceListQueryHandler(IElevatDbContext context)
        {
            _context = context;
        }

        public async Task<List<ServiceDTO>> Handle(GetServiceListQuery request, CancellationToken cancellationToken)
        {
            return await _context.Services.Select(service => new ServiceDTO { Id = service.Id, Name = service.Name, Minutes = service.Minutes, Price = service.Price}).ToListAsync();
        }
    }
}
