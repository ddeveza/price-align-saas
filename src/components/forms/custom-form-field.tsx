import { FieldValues, FieldPath, Control } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define the type interface for CustomFormField props
type CustomFormFieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label: string;
  description?: string;
  Component?: React.ComponentType<any>;
};

// Define the CustomFormField component with the specified props interface
const CustomFormField = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  description,
  Component = Input,
}: CustomFormFieldProps<TFieldValues>) => (
  <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Component {...field} />
        </FormControl>
        {description && <FormDescription>{description}</FormDescription>}
        <FormMessage />
      </FormItem>
    )}
  />
);

export default CustomFormField;
