import { Textarea } from '@/components/ui/textarea'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { NotebookPen, TrendingUp } from 'lucide-react'


export default function TopicInput() {
    return (
        <div className="mt-16 pb-7">
            <h2 className="flex gap-2 items-center text-start text-base sm:text-md md:text-lg xl:text-xl font-semibold"><NotebookPen className="text-blue-600 dark:text-blue-500" /> Cuéntame más sobre lo que quieres aprender, estoy tomando nota</h2>
            <Textarea placeholder="¿Es algo específico como astronomía, lenguajes de programación o arte moderno?" className="mt-4 " />
            <h2 className="flex gap-2 items-center text-base sm:text-md md:text-lg xl:text-xl font-semibold pt-8"><TrendingUp className="text-blue-600 dark:text-blue-500" /> Selecciona un nivel de dificultad</h2>
            
            <div className="py-4">
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Tu nivel actual" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="easy">🐣 Principiante</SelectItem>
                        <SelectItem value="moderate"> 🧩 Intermedio</SelectItem>
                        <SelectItem value="hard">🎓 Avanzado</SelectItem>
                    </SelectContent>
                </Select>
            </div>

        </div>
    )
}
