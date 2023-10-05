import axios from 'axios';
import {
  cardsProducts,
  getPhotos,
  getColorsForProduct,
  getProducts,
  editProduct,
  deleteProduct,
  reverseProducts,
  editProductQuantity,
} from './tuArchivoConFunciones'; // Asegúrate de importar el archivo correcto

// Mockeamos axios para que no haga llamadas reales a la API
jest.mock('axios');

describe('Pruebas para funciones de API', () => {
  // Antes de cada prueba, restablecemos las simulaciones de axios
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('debería obtener las tarjetas de productos', async () => {
    // Simulamos una respuesta exitosa de axios
    axios.get.mockResolvedValue({ data: ['producto1', 'producto2'] });

    const result = await cardsProducts();

    // Verificamos que la función devuelva los datos esperados
    expect(result).toEqual(['producto1', 'producto2']);
    // Verificamos que axios haya sido llamado con la URL correcta
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/products'));
  });

//   it('debería obtener las fotos', async () => {
//     // Simulamos una respuesta exitosa de axios
//     axios.get.mockResolvedValue({ data: ['foto1', 'foto2'] });

//     const result = await getPhotos();

//     // Verificamos que la función devuelva los datos esperados
//     expect(result).toEqual(['foto1', 'foto2']);
//     // Verificamos que axios haya sido llamado con la URL correcta
//     expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/photos'));
//   });

//   it('debería obtener los colores de un producto', async () => {
//     const productId = 123;

//     // Simulamos una respuesta exitosa de axios
//     axios.get.mockResolvedValue({ data: ['rojo', 'azul'] });

//     const result = await getColorsForProduct(productId);

//     // Verificamos que la función devuelva los datos esperados
//     expect(result).toEqual(['rojo', 'azul']);
//     // Verificamos que axios haya sido llamado con la URL correcta
//     expect(axios.get).toHaveBeenCalledWith(expect.stringContaining(`/products/${productId}/colors`));
//   });

//   it('debería obtener los productos', async () => {
//     // Simulamos una respuesta exitosa de axios
//     axios.get.mockResolvedValue({ data: ['producto1', 'producto2'] });

//     const result = await getProducts();

//     // Verificamos que la función devuelva los datos esperados
//     expect(result).toEqual(['producto1', 'producto2']);
//     // Verificamos que axios haya sido llamado con la URL correcta
//     expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/products'));
//   });

//   it('debería editar un producto', async () => {
//     const productId = 123;
//     const formData = { nombre: 'Nuevo Producto' };

//     // Simulamos una respuesta exitosa de axios
//     axios.put.mockResolvedValue({ data: 'Producto actualizado' });

//     const result = await editProduct(productId, formData);

//     // Verificamos que la función devuelva los datos esperados
//     expect(result).toEqual('Producto actualizado');
//     // Verificamos que axios haya sido llamado con la URL correcta y los datos del formulario
//     expect(axios.put).toHaveBeenCalledWith(expect.stringContaining(`/products/${productId}`), formData, expect.any(Object));
//   });

//   it('debería eliminar un producto', async () => {
//     const productId = 123;

    // Simulamos una respuesta exitosa de axios
//     axios.delete.mockResolvedValue({ status: 200 });

//     const result = await deleteProduct(productId);

//     // Verificamos que la función devuelva true cuando se elimina con éxito
//     expect(result).toBeTruthy();
//     // Verificamos que axios haya sido llamado con la URL correcta
//     expect(axios.delete).toHaveBeenCalledWith(expect.stringContaining(`/products/${productId}`), expect.any(Object));
//   });

//   it('debería obtener productos en orden inverso', async () => {
//     // Simulamos una respuesta exitosa de axios
//     axios.get.mockResolvedValue({ data: ['producto2', 'producto1'] });

//     const result = await reverseProducts();

//     // Verificamos que la función devuelva los datos esperados en orden inverso
//     expect(result).toEqual(['producto2', 'producto1']);
//     // Verificamos que axios haya sido llamado con la URL correcta
//     expect(axios.get).toHaveBeenCalledWith(expect.stringContaining('/products'));
//   });

//   it('debería editar la cantidad de un producto', async () => {
//     const productId = 123;
//     const newQuantity = 5;

//     // Simulamos una respuesta exitosa de axios
//     axios.put.mockResolvedValue({ status: 200, data: 'Cantidad actualizada' });

//     const result = await editProductQuantity(productId, newQuantity);

//     // Verificamos que la función devuelva los datos esperados cuando se edita con éxito
//     expect(result).toEqual('Cantidad actualizada');
//     // Verificamos que axios haya sido llamado con la URL correcta y los datos de cantidad
//     expect(axios.put).toHaveBeenCalledWith(
//       expect.stringContaining(`/products/${productId}`),
//       newQuantity,
//       expect.any(Object)
//     );
//   });

//   test('Renderiza MyComponent correctamente', () => {
//     const { getByText } = render(<MyComponent />);
    
//     // Asegúrate de que un elemento con el texto "Hola Mundo" esté presente
//     expect(getByText('Hola Mundo')).toBeInTheDocument();
  });
