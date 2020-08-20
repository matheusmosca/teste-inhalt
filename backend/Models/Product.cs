using System.ComponentModel.DataAnnotations;

namespace backend.Models 
{
    public class Product 
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Campo obrigatório")]
        [MaxLength(50, ErrorMessage = "Este campo só pode conter até 50 caracteres")]
        public string Name { get; set; }

        [Required(ErrorMessage = "Campo obrigatório")]
        [Range(1, int.MaxValue, ErrorMessage= "O preço não pode ser negativo")]
        public decimal Price { get; set; }

        [Required(ErrorMessage = "Campo obrigatório")]
        [Range(0, int.MaxValue, ErrorMessage= "Não há produtos em estoque suficiente para realizar a operação")]
        public int Amount { get; set; }
    }
}