'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.'
  }),
  country: z.string({
    required_error: 'Please select a country.'
  }),
  email: z.string().email({
    message: 'Please enter a valid email address.'
  }),
  company: z.string().min(1, {
    message: 'Company name is required.'
  }),
  gender: z.enum(['male', 'female', 'other'], {
    required_error: 'Please select a gender.'
  })
});

export default function EmployeeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      country: '',
      email: '',
      company: '',
      gender: undefined
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('🚀 ~ onSubmit ~ values:', values);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="">Employee Information</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form>
            <FormField
              control={form.control}
              name="name"
              render={(field) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            ></FormField>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
