using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace Core.Specifications
{
    public class BaseSpecification<T> : ISpecification<T>
    {
        public BaseSpecification() { }
        public BaseSpecification(Expression<Func<T, bool>> standart)
        {
            Standart = standart;
        }


        public Expression<Func<T, bool>> Standart { get; }
        public List<Expression<Func<T, object>>> Includes { get; } = new List<Expression<Func<T, Object>>>();

        protected void AddInclude(Expression<Func<T,Object>> includeExpression)
        {
            Includes.Add(includeExpression);
        }


    }
}
