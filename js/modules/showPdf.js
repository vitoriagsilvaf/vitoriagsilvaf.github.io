function showPdf(pdfId) {
    // Esconde todos os PDFs
    document.getElementById('pdf-frontend').classList.remove('show');
    document.getElementById('pdf-fullstack').classList.remove('show');
    
    // Mostra o PDF selecionado
    if (pdfId === 'frontend') {
        document.getElementById('pdf-frontend').classList.add('show');
    } else if (pdfId === 'fullstack') {
        document.getElementById('pdf-fullstack').classList.add('show');
    }
}
