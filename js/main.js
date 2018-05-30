
		$('#tkj').hide();
		$('#tkr').hide();
		$('#tm').hide();

		$('.jurusan').change(function() {
			if ($('.jurusan').val() == 'TKJ') {
				$('#tkj').show('slow');
				$('#tkr').hide('slow');
				$('#tm').hide('slow');
			} else if ($('.jurusan').val() == 'TO') {
				$('#tkj').hide('slow');
				$('#tkr').show('slow');
				$('#tm').hide('slow');
			} else if ($('.jurusan').val() == 'TP') {
				$('#tkj').hide('slow');
				$('#tkr').hide('slow');
				$('#tm').show('slow');
			} else {
				$('#tkj').hide('slow');
				$('#tkr').hide('slow');
				$('#tm').hide('slow');
			}
			 
		});

		var isi = {
			data : [], 

			nama : "",
			kelas : "",
			jurusan : "",
			prodi : "",

			getValue: function(){

				return " <td> " + this.nama + " </td><td> " + this.kelas + " </td><td> " + this.jurusan + " - " + this.prodi + 
					"</td><td> <button class='btn btn-danger' onclick='isi.hapusKonten();' data-id=''>Delete</button> | <button class='btn btn-warning'>Edit</button> </td>";
			},

			setData: function(nama, kelas, jurusan, prodi){
				this.nama = nama;
				this.kelas = kelas;
				this.jurusan = jurusan;
				this.prodi = prodi;

				},

			

			myFunction: function(){
				var fname, kls, jur, prodi;	

				fname = $('#fullname').val();
				kls = $('input[name=kelas]:checked').val();
				jur = $('.jurusan option:selected').text();
				prodi = $('input[name=prodi]:checked').val();

				isi.data.push(this.getValue());

				console.log(this.data);


				isi.setData(fname, kls, jur, prodi);

				$('tbody').append('<tr>' + isi.getValue() + '</tr>');
				// // document.getElementById('tampil').innerHTML = isi.getValue();
			},

			hapusKonten: function(index){
				isi.data.splice(0, 1);
				console.log(isi.data);
			},

		};

		
