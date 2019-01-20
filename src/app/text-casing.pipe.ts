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
            'is',
            'not',
            'do'
        ]
        for (let i = 0; i < words.length; i++) {
            if (i > 0 && stopWords.includes(words[i])) {
                words[i] = words[i].toLowerCase();
            } else {
                words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substr(1).toLowerCase();
            }

        }
        return words.join(' ');
    };
}