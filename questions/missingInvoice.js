function findMissingInvoice(invoiceNumbers) {
  const n = invoiceNumbers.length + 1;
  const totalSum = (n * (n + 1)) / 2;

  const actualSum = invoiceNumbers.reduce((sum, num) => sum + num, 0);
  const missingInvoice = totalSum - actualSum;

  return missingInvoice;
}

const invoiceNumbers = [1, 2, 3, 5, 6];
const missingInvoiceNumber = findMissingInvoice(invoiceNumbers);
console.log("Missing Invoice Number:", missingInvoiceNumber);
