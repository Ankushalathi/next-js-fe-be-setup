import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import Form from '../../models/Form';

export async function POST(req: NextRequest) {
    try {
        await connectDB(); // Connect to the database
        const body = await req.json();

        // Save the form data to the database
        const form = new Form(body);
        await form.save();

        return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 201 });
    } catch (error) {
        console.error('Error submitting form:', error);
        return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
    }
}
