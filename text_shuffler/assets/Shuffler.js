function Shuffler(basis, fadeIn, fadeOut, element, chars){
    this.basis = basis.split('');
    this.new = basis.split('');
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
            setTimeout(function() { that.shuffle(startupTime) }, 100);
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

}

window.

window.onload = function(e){
    var s = new Shuffler('minot0r', 2000, 1000, document.getElementById('content'), '!<>-_\\/[]{}Ã¢â‚¬â€=+*^?#________'.split(''))
    s.shuffle(Date.now());
    setInterval(function(){
        s.shuffle(Date.now());
    }, 5000);
}
