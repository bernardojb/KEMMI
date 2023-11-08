'use client'
import { useState } from 'react';

const useForm = validate => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        office: '',
        institution: '',
        message: '',
    });

    const [isSubmitting, setSubmitting] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        console.log(value)
    };

    const handlePress = async (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setLoading(true)

        if (values.name, values.email, values.phone, values.message === null &&
            values.name, values.email, values.phone, values.message === "") {
            setErrors(validate(values));
            setLoading(false)
        } else {
            console.log(isSubmitting)
            await fetch(
                '/contato/send/',
                {
                    method: "POST",
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(function (res) {
                    console.log(res)
                    setLoading(false)
                }).catch(function (err) {
                    console.error(err)
                })
                .finally(() => {
                    setSubmitting(true)
                });
        }
    };

    return {
        isSubmitting,
        handleChange,
        values,
        handlePress,
        errors,
        setValues,
        isLoading,
        setSubmitting
    };

};

export default useForm;