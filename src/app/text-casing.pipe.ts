import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "stopCase"
})

export class textCasting implements PipeTransform {
    transform(value: string): any {
        if (!value) {
            return null;
        }
        let words = value.split(' ');
        let stopWords = [
            'to',
            'the',
            'if',
            'was',
            'do'
        ]
        for (let i = 0; i < words.length; i++) {
            const element = words[i];
            stopWords.filter((current, index) => {
                if (element == current) {
                    return element
                }
            })

        }
    };
}