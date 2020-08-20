using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

public class User 
{
    [Key]
    public long Id { get; set; }
    
    [Required]
    public string Username { get; set; }
    
    [Required]
    public string Password { get; set; }
}