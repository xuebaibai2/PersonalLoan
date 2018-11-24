﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalLoanAPI.Models.database
{
    public class Errors
    {
        public int Id { get; set; }
        public string ExceptionType { get; set; }
        public string Message { get; set; }
        public DateTime Date { get; set; }
    }
}