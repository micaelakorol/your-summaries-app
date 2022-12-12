// Captura el valor de la categoria seleccionada:
export const CaptureCategory = (setChangeCategory) => {

    const handleCaptureCategory = (e) => {
        setChangeCategory(e.currentTarget.dataset.valor);
      };

  return {handleCaptureCategory}
}
