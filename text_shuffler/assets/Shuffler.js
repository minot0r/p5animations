function Shuffler(fadeIn, fadeOut, element, chars){
    this.basis;
    this.new;
    this.fadeIn = fadeIn;
    this.fadeOut = fadeOut;
    this.element = element;
    this.chars = chars;

    this.shuffle = function(startupTime){
        var index = Math.round(Math.random() * (this.basis.length - 1));
        var random = this.chars[Math.round(Math.random() * (this.chars.length - 1))];
        this.new[index] = random;
        this.element.innerHTML = this.new.join('');
        if(Date.now() - startupTime < this.fadeIn){
            let that = this;
            setTimeout(function() { that.shuffle(startupTime) }, 50);
        }else{
            this.unshuffle(this.createSequence(), this.basis, 0, this.element);
        }
    }

    this.unshuffle = function(sequence, basis, index, element){
        if(index < sequence.length){
            this.element.innerHTML = this.element.textContent.substr(0, sequence[index]) + basis[sequence[index]] + this.element.textContent.substr(sequence[index] + basis[sequence[index]].length);
            let that = this;
            setTimeout(function() { that.unshuffle(sequence, basis, index+1, element) }, this.fadeOut/sequence.length);
        }
    }

    this.createSequence = function(){
        var sequence = [];
        for(var i = 0; i < this.basis.length; i++) { sequence.push(i); }
        sequence = sequence.sort(function() { return 0.5 - Math.random() });
        return sequence;
    }

    this.run = function(text){
        this.basis = text.split('');
        this.new = text.split('');
        this.shuffle(Date.now());
    }

}


window.onload = function(e){
    const phrases = ['minot0r', 'the', 'web', 'developer'];
    var s = new Shuffler(2000, 500, document.getElementById('content'), '!<>-_\\/[]{}Ã¢â‚¬â€=+*^?#________'.split(''))
    loop(phrases, 0);

    function loop(phrases, index) {
        s.run(phrases[index]);
        if(index < phrases.length-1){
            setTimeout(function() {
                loop(phrases, index+1);
            }, 2000+500+1000);
        }else{
            setTimeout(function() {
                loop(phrases, 0);
            }, 2000+500+1000);
        }
    }
}
