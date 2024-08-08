import Image from 'next/image';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Notification from '../components/Notification'

export default function CarModal() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [message, setMessage] = useState('');

    const [isOpen, setIsOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    // Estados para los detalles del coche
    const [tipo, setTipo] = useState('');
    const [modelo, setModelo] = useState('');
    const [doors, setDoors] = useState('');
    const [asientos, setAsientos] = useState('');
    const [transmision, setTransmision] = useState('');
    const [equipaje, setEquipaje] = useState('');
    const [combustible, setCombustible] = useState('');
    const [precioDia, setPrecioDia] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const onSubmit = handleSubmit(async (data) => {

        const formData = new FormData();
        formData.append('file', file);
        formData.append('tipo', data.tipo);
        formData.append('modelo', data.modelo);
        formData.append('doors', data.doors);
        formData.append('asientos', data.asientos);
        formData.append('transmision', data.transmision);
        formData.append('equipaje', data.equipaje);
        formData.append('combustible', data.combustible);
        formData.append('precio_dia', data.precioDia);
        formData.append('placa', data.placa);
        formData.append('marca', data.marca);

        const res = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });

        const response = await res.json();
        setImageUrl(response.filePath);

        const timer = setTimeout(() => {
            closeModal();
            setMessage('¡Operación exitosa!');

        }, 3000);

        return () => clearTimeout(timer);
    });

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div>
            <button onClick={openModal} className="bg-blue-500 text-white p-2 rounded">
                Registrar vehiculo
            </button>
            <Notification message={message} />


            {isOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-full max-w-4xl">
                        <h2 className="text-xl mb-4">Car Details</h2>
                        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <label className="block text-gray-700">Placa:</label>
                                <input
                                    {...register("placa", { required: { value: true, message: "Placa is required" } })}
                                    type="text"
                                    name="placa"
                                    className="w-full p-2 border rounded"
                                />
                                {errors.placa && <span className="text-red-500">{errors.placa.message}</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Tipo:</label>
                                <input
                                    {...register("tipo", { required: { value: true, message: "Tipo is required" } })}
                                    type="text"
                                    name="tipo"
                                    className="w-full p-2 border rounded"
                                    value={tipo}
                                    onChange={(e) => setTipo(e.target.value)}
                                />
                                {errors.tipo && <span className="text-red-500">{errors.tipo.message}</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Modelo:</label>
                                <input
                                    {...register("modelo", { required: { value: true, message: "Modelo is required" } })}
                                    type="text"
                                    name="modelo"
                                    className="w-full p-2 border rounded"
                                    value={modelo}
                                    onChange={(e) => setModelo(e.target.value)}
                                />
                                {errors.modelo && <span className="text-red-500">{errors.modelo.message}</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Marca:</label>
                                <select
                                    {...register("marca")}
                                    name="car-brand"
                                    id="car-brand"
                                    className="block w-full p-2 border rounded"
                                >
                                    <option value="1">Toyota</option>
                                    <option value="2">Honda</option>
                                    <option value="3">Ford</option>
                                    <option value="4">Chevrolet</option>
                                    <option value="5">Nissan</option>
                                    <option value="6">BMW</option>
                                    <option value="7">Mercedes-Benz</option>
                                    <option value="8">Volkswagen</option>
                                    <option value="9">Hyundai</option>
                                    <option value="10">Kia</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Doors:</label>
                                <input
                                    {...register("doors", { required: { value: true, message: "Doors is required" } })}
                                    type="number"
                                    name="doors"
                                    className="w-full p-2 border rounded"
                                    value={doors}
                                    onChange={(e) => setDoors(e.target.value)}
                                />
                                {errors.doors && <span className="text-red-500">{errors.doors.message}</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Asientos:</label>
                                <input
                                    {...register("asientos", { required: { value: true, message: "Asientos is required" } })}
                                    type="number"
                                    name="asientos"
                                    className="w-full p-2 border rounded"
                                    value={asientos}
                                    onChange={(e) => setAsientos(e.target.value)}
                                />
                                {errors.asientos && <span className="text-red-500">{errors.asientos.message}</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Transmisión:</label>
                                <input
                                    {...register("transmision", { required: { value: true, message: "Transmisión is required" } })}
                                    type="text"
                                    name="transmision"
                                    className="w-full p-2 border rounded"
                                    value={transmision}
                                    onChange={(e) => setTransmision(e.target.value)}
                                />
                                {errors.transmision && <span className="text-red-500">{errors.transmision.message}</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Equipaje:</label>
                                <input
                                    {...register("equipaje", { required: { value: true, message: "Equipaje is required" } })}
                                    type="text"
                                    name="equipaje"
                                    className="w-full p-2 border rounded"
                                    value={equipaje}
                                    onChange={(e) => setEquipaje(e.target.value)}
                                />
                                {errors.equipaje && <span className="text-red-500">{errors.equipaje.message}</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Combustible:</label>
                                <input
                                    {...register("combustible", { required: { value: true, message: "Combustible is required" } })}
                                    type="text"
                                    name="combustible"
                                    className="w-full p-2 border rounded"
                                    value={combustible}
                                    onChange={(e) => setCombustible(e.target.value)}
                                />
                                {errors.combustible && <span className="text-red-500">{errors.combustible.message}</span>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Precio por día:</label>
                                <input
                                    {...register("precio_dia", { required: { value: true, message: "Precio por día is required" } })}
                                    type="number"
                                    name="precio_dia"
                                    className="w-full p-2 border rounded"
                                    value={precioDia}
                                    onChange={(e) => setPrecioDia(e.target.value)}
                                />
                                {errors.precio_dia && <span className="text-red-500">{errors.precio_dia.message}</span>}
                            </div>
                            <div className="mb-4 col-span-2">
                                <input required type="file" onChange={handleFileChange} />
                            </div>
                            {imageUrl && (
                                <div className="col-span-2">
                                    <p>Image uploaded successfully:</p>
                                    <Image src={imageUrl} alt="Uploaded" width={300} height={50} />
                                </div>
                            )}
                            {/* <div className="col-span-2 flex justify-end">
                                <button type="submit" disabled={isSubmitting} onClick={() => { setIsSubmitting(true) }} className="bg-green-500 text-white p-2 rounded">Submit</button>
                            </div> */}
                            <div className="col-span-2 flex justify-between items-center">
                                <button type="submit" disabled={isSubmitting} className="bg-green-500 text-white p-2 rounded">Submit</button>
                                <button onClick={closeModal} className="bg-red-500 text-white p-2 rounded">
                                    Close
                                </button>
                            </div>
                        </form>
                        {/* <button onClick={closeModal} className="mt-4 bg-red-500 text-white p-2 rounded">
                            Close
                        </button> */}
                    </div>
                </div>
            )}
        </div>

    );
}
