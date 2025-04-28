export function showPdf(certificado) {
  const pdfFrontend = document.getElementById("pdf-frontend");
  const pdfFullstack = document.getElementById("pdf-fullstack");

  // Inicialmente, esconda todos os PDFs
  pdfFrontend.style.width = '0';
  pdfFrontend.style.height = '0';
  pdfFullstack.style.width = '0';
  pdfFullstack.style.height = '0';

  // Mostre o PDF correspondente ao certificado clicado
  if (certificado === 'frontend') {
    pdfFrontend.style.width = '100%';
    pdfFrontend.style.height = '500px'; // Ajuste o tamanho conforme necessário
  } else if (certificado === 'fullstack') {
    pdfFullstack.style.width = '100%';
    pdfFullstack.style.height = '500px'; // Ajuste o tamanho conforme necessário
  }
}
