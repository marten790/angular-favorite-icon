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

        for (let i = 0; i < words.length; i++) {
            if (i > 0 && this.stopWordsFilter(words[i])) {
                words[i] = words[i].toLowerCase();
            } else {
                words[i] = this.uppercaseFirstLetter(words[i]);
            }

        }
        return words.join(' ');
    };

    private uppercaseFirstLetter(word: string): string {
        return word.substring(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    }

    private stopWordsFilter(word: string): boolean {
        let stopWords = [
            'to',
            'the',
            'if',
            'was',
            'is',
            'not',
            'do'
        ]
        return stopWords.includes(word.toLowerCase());
    }
}