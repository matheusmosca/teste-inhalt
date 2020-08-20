using System.ComponentModel.DataAnnotations;

namespace backend.Models 
{
    public class Sale 
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Campo obrigatório")]
        [Range(0, int.MaxValue, ErrorMessage= "Não há produtos em estoque suficiente para realizar a operação")]
        public int Amount { get; set; }

        public decimal Value { get; set; }

        [Required(ErrorMessage = "Campo obrigatório")]
        public int ProductId { get; set; }

        public Product Product { get; set; }
    }
}