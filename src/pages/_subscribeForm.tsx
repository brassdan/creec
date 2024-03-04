import { createForm } from "simple:form";
import { Form, Input } from "~/components/Form";
import { z } from "zod";

export const subscribeForm = createForm({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Email is required"),
        disclaimer: z.literal(true, { errorMap: () => ({ message: "You must agree to the collection of your personal information" }) }),
})

export function SubscribeForm() {
    return (
        <>
            <Form validator={subscribeForm.validator}> 
                <label htmlFor="name">Name</label>
                <Input id="name" {...subscribeForm.inputProps.name} required/>

                <label htmlFor="email">Email</label> 
                <Input id="email" {...subscribeForm.inputProps.email} required/>

                <label htmlFor="disclaimer">By submitting this form, you acknowledge and agree to the collection of your personal information.</label>
                <Input id="disclaimer" {...subscribeForm.inputProps.disclaimer} />

                <button type="submit">Subscribe</button>    
            </Form>
        </>
    );
} 