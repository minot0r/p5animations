function Shuffler(fadeIn, fadeOut, element, chars){
    this.basis;
    this.new;
    this.prev;
    this.fadeIn = fadeIn;
    this.fadeOut = fadeOut;
    this.element = element;
    this.chars = chars;

    this.shuffle = function(startupTime){
        var elapsed = Date.now() - startupTime;
        var len = Math.round(((elapsed-0)/(this.fadeIn-0))*(this.basis.length-this.prev.length)+this.prev.length);
        var index = Math.round(Math.random() * len);
        var random = this.chars[Math.round(Math.random() * (this.chars.length - 1))];
        this.new[index] = random;
        this.element.innerHTML = this.new.join('').substr(0, len);
        if(elapsed < this.fadeIn){
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

    this.run = function(phrases, start){
        this.prev = phrases[(start == 0) ? phrases.length-1 : start-1];
        this.basis = phrases[start].split('');
        this.new = this.element.textContent.split('');
        this.shuffle(Date.now());
        let that = this;
        setTimeout(function(){
            if(start < phrases.length-1){
                that.run(phrases, start+1);
            }else{
                that.run(phrases, 0);
            }
        }, this.fadeIn+this.fadeOut+1000);
    }

}


window.onload = function(e){
    const phrases = ['minot0r', 'the', 'web', 'developer'];
    var s = new Shuffler(2000, 500, document.getElementById('content'), '!<>-_\\/[]{}Ã¢â‚¬â€=+*^?#________'.split(''))
    s.run(phrases, 0);
}
