using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Erros
{
    public class CodeErrorResponse
    {
        public CodeErrorResponse(int statusCode, string message = null)
        {
            StatusCode = statusCode;
            Message = message ?? GetDefaultMessageStatusCode(statusCode);
        }

       

        private string GetDefaultMessageStatusCode(int statusCode )
        {
            return statusCode switch
            {
                400 => "Sent order contains errors",
                401 => "does not have authorization",
                404 => "nothing found",
                500 => "Error Servidor",
                _ => null

            };
        }

        public int StatusCode { get; set; }
        public string Message { get; set; }
    }
}
