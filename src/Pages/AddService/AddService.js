import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className="w-50 mx-auto">
            <h2 className="text-center my-3">Add another service</h2>
            <form
                className="d-flex flex-column"
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    className="mb-2"
                    placeholder="Name"
                    {...register("Name", {
                        required: true,
                        maxLength: 20,
                    })}
                />
                <textarea
                    className="mb-2"
                    placeholder="Description"
                    {...register("description")}
                />
                <input
                    className="mb-2"
                    placeholder="PhotoURL"
                    type="text"
                    {...register("img")}
                />
                <input
                    className="mb-2"
                    placeholder="Price"
                    type="number"
                    {...register("price")}
                />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;
